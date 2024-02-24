exports.createQuestion = () => {
  const kanbanizeId = {
    message: 'Write your card id in kanbanize: ',
    name: 'kanbanizeId',
    type: 'input'
  };

  return kanbanizeId;
};
