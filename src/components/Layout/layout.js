import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Navbar } from '../Navbar/navbar';
import { ComponentsPicker } from '../ComponentsPicker/components-picker';
import { ComponentsPreview } from '../ComponentsPreview/components-preview';
import { EditedComponent } from '../EditedComponent/edited-component';

import { componentsActions } from '../../store/components';

export const Layout = () => {
  const currentlyEdited = useSelector(state => state.components?.currentlyEdited);
  const [lockedPicker, setLockedPicker] = useState(currentlyEdited)
  const dispatch = useDispatch();
  const onRemoveClick = id => dispatch(componentsActions.removeComponent({id}));
  const onSubmit = (id, values) => {
    dispatch(componentsActions.updateComponent({id, data: { values }}))
    setLockedPicker(false);
  };

  useEffect(() => {
    setLockedPicker(currentlyEdited)
  }, [currentlyEdited])

  return   <>
    <Navbar />
    <div className="d-flex">
      <ComponentsPreview />
      <ComponentsPicker lockedPicker={currentlyEdited}/>
    </div>
    {currentlyEdited && (
      <EditedComponent
        layout={currentlyEdited.layout}
        onRemoveClick={() => onRemoveClick(currentlyEdited.id)}
        onSubmit={values => onSubmit(currentlyEdited.id, values)}
        values={currentlyEdited.values}
      />
    )}
  </>
}

Layout.defaultProps = {
  currentlyEdited: null,
};
