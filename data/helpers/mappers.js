module.exports = {
    intToBoolean,
    booleanToint,
    projectToBody,
    actionToBody,
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function projectToBody(project) {
    const result = {
      ...project,
      complete: intToBoolean(project.complete),
    };
  
    if (project.actions) {
      result.actions = project.actions.map(action => ({
        ...action,
        complete: intToBoolean(action.complete),
      }));
    }
  
    return result;
  }
  
  function actionToBody(action) {
    return {
      ...action,
      complete: intToBoolean(action.complete),
    };
  }