export const createModuleObjectOrArrayForNewCohort = (numOfModules) => {
    let moduleObject = {};

    for (let i=0; i < numOfModules; i++){
        moduleObject = {...moduleObject, [`Week${i+1}`]: null}
    }
    
    // add on Mock Presentation
    moduleObject = {...moduleObject, "Mock Presentation": null}
    
    const moduleArray = Object.entries(moduleObject);
    console.log("🚀 ~ file: ModuleCard.js:12 ~ ModuleCard ~ moduleArray:", moduleArray)

    return moduleObject;
}