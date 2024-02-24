exports.createQuestion = (state) => {
  const {config} = state;
  config.minMessageLength = 6;

  const minTitleLengthErrorMessage = `The kanbanize id must have at least ${config.minMessageLength} numbers`;

  const kanbanizeId = {
    leadingLabel: (answers) => {
      let kanbanize = 'kanbanize card';

      if (answers.kanbanizeId && answers.kanbanizeId !== 'none') {
        kanbanize = `(${answers.kanbanizeId})`;
      }

      return `${kanbanize}:`;
    },

    maxLength: config.maxMessageLength - 6,
    message: 'Write your card id in kanbanize: ',
    name: 'kanbanizeId',
    type: 'input',
    validate: (input) =>
      input.length >= config.minMessageLength || minTitleLengthErrorMessage
  };

  return kanbanizeId;
};
