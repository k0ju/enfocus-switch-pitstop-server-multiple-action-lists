async function calculateScriptExpression(s: Switch, flowElement: FlowElement, job: Job): Promise<string> {
   // Define the full path to the action lists. Typically, the path is: "C:/Users/[USER]/AppData/Roaming/Enfocus Prefs Folder/Action Lists/"
   const actionList_1:string = "[FullPath]/[ActionListName].eal";
   const actionList_2:string = "[FullPath]/[ActionListName].eal";
   const actionList_3:string = "[FullPath]/[ActionListName].eal";
   const actionList_4:string = "[FullPath]/[ActionListName].eal";

   let actionListArray: string[] = new Array();
   let result:string = "";
	
   // Retrieve condition from the job ticket, such as private data
   const condition:string = await job.getPrivateData("[KEY]");

   switch(condition) { 
      case "a": {
         actionListArray.push(actionList_1, actionList_4);
         break; 
      } 
      case "b": { 
         actionListArray.push(actionList_2, actionList_4); 
         break; 
      }
      case "c":
      case "d": { 
         actionListArray.push(actionList_3, actionList_4); 
         break; 
      }
      default: {
         // To route the job to the warning or error connection of the flow element, the script must return a result that indicates no action lists.
         result = "No actionList."
         return result;
      } 
   }

   // Switch expects each action list on a separate line, so concatenate them with '\n' line breaks.
   result = actionListArray.join( '\n' );

   return result;
}