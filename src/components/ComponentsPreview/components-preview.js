import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ComponentsWrapper } from '../ComponentsWrapper/components-wrapper';
import { componentsActions } from '../../store/components';
import {A} from '../Components/A'
import {Img} from '../Components/Img'
import './components-preview.css'

const isEmpty = obj => Object.keys(obj).length === 0;

export const ComponentsPreview = () => {
  const components = useSelector(state => state.components?.items);
  const currentlyEdited = useSelector(state => state.components?.currentlyEdited);
  const dispatch = useDispatch();
  const onComponentEdit = component => dispatch(componentsActions.setEditedComponent({component}));
  const paramsForA={
    href: 'http://www.google.com',
    label: 'Click me!'
  }
  const paramsForImg={
    src: 'https://via.placeholder.com/400x200',
    alt: 'Cool image'
  }

  return (
    <div data-testid="components-preview" className="components-preview">
      {components?.map(component => (
        <ComponentsWrapper
          key={component.id}
          isEdited={component?.id === currentlyEdited?.id && !isEmpty(component.values)}
          onComponentEdit={() => onComponentEdit(component)}
          {...component}
        />
      ))}
    </div>
  );
}

ComponentsPreview.defaultProps = {
  currentlyEdited: {},
};
