var recipes = new Object ({prop:'1'});

function updateObjectWithKeyAndValue(object,key,value){
  var recipe2 = Object.assign({},recipes,{prop2:"2"});
  return recipe2
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
var recipes2 = recipes.prop2="2"
return recipes2 
}
