import React, { useState } from 'react';
import {
  FieldContainer,
  TagTitle,
  CrossIcon,
  InputWrapper,
  Form,
  Input,
} from './tags-ui-styles';
import Cross from '../../assets/images/cross.png';

const Title = (props) => {
  const { title, id } = props;
  return (
    <TagTitle>
      <span>{title.text}</span>
      <CrossIcon src={Cross} onClick={() => props.removeTitle(id)} />
    </TagTitle>
  );
};

const TagInput = (props) => {
  let text, tagForm;
  const tagEvent = (e) => {
    const tag = text.value;
    const tagGroup = tag.split(' ');
    const titles = props.titles;
    const hasTitles = Object.keys(titles).length > 0;

    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      tagGroup.map((tag) => props.addTitle(tag));
      tagForm.reset();
    }

    if (e.keyCode === 8 && hasTitles && tag === '') {
      e.preventDefault();
      props.editLastTitle();
      tagForm.reset();
    }
  };

  return (
    <InputWrapper>
      <Form ref={(input) => (tagForm = input)}>
        <Input
          ref={(input) => (text = input)}
          type="text"
          name="new-item"
          placeholder="Add tag and press space"
          autoComplete="off"
          defaultValue={props.value}
          onKeyDown={(e) => tagEvent(e)}
        />
      </Form>
    </InputWrapper>
  );
};

const TagUi = (props) => {
  const [uiState, setUiState] = useState({
    titles: [],
  });
  const [currentValue, setCurrentValue] = useState('');

  const addTitle = (title) => {
    const uniqid = () => Math.random().toString(36).substr(2, 9);

    const { titles } = uiState;
    const newTitleId = uniqid();
    titles[newTitleId] = { text: title };
    setUiState({
      titles,
    });
    props.getTags(titles);
  };

  const removeTitle = (id) => {
    const { titles } = uiState;
    delete titles[id];
    setUiState({ titles });
  };

  const editLastTitle = () => {
    const { titles } = uiState;
    const lastTitleValue = Object.keys(titles).slice(-1).pop();
    setCurrentValue(titles[lastTitleValue].text);
    delete titles[lastTitleValue];
    setUiState({
      titles,
    });
    setCurrentValue('');
  };

  return (
    <FieldContainer>
      {Object.keys(uiState.titles).map((key) => (
        <Title
          key={key}
          id={key}
          title={uiState.titles[key]}
          removeTitle={removeTitle}
        />
      ))}
      <TagInput
        addTitle={addTitle}
        editLastTitle={editLastTitle}
        titles={uiState.titles}
        value={currentValue}
      />
    </FieldContainer>
  );
};

export default TagUi;
