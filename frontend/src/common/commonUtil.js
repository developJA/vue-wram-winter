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

	static addComma = (str) => {
		str = str.replace(/[^0-9]/g, '');
		var parts = str.toString().split('.');
		if(str.substring(str.length - 1, str.length)=='.'){
			str = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",") +".";
		} else {
			str = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",") + (parts[1] ? "." + parts[1] : "");
		}
		return str;
	}

}
