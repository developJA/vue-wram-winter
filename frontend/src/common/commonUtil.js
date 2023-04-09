//공통함수 
export default class CommonUtil{
	static CommonFunc = () => {
		console.log('common Test');
		
	}

	static xmlToJson = (nodeList) => {
		let jsonArray = [];
		for(let i=0;i<nodeList.length;i++){
			var item = nodeList[i];
			var childNodes = item.childNodes;
			let obj = {};
			for(let j=0; j<childNodes.length; j++){
				if(childNodes[j].nodeName != "#text"){
					let _nodeNm = childNodes[j].nodeName;
					let _nodeValue = childNodes[j].childNodes[0].nodeValue;
					obj[_nodeNm] = _nodeValue;
				}
			}
			jsonArray.push(obj);
		}

		return jsonArray;
		
	}
}
