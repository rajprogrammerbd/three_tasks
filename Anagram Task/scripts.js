function find(strOne, strTwo) {
	var answer;
	if (Array.isArray(strOne) && (typeof strTwo === "string")) {
		let ans = [];
		for (let i = 0; i < strOne.length; i++) {
			if (strTwo.search(`${strOne[i].toLowerCase()}`) === -1) {
				ans.push(false);
			} else {
				ans.push(true);
			}
		}
		(ans.find(a => a === false) === false) ? answer = false : answer = true;
	} else throw new Error("Function can use array as parameter");

	return answer;
}

function anagram(str1, str2) {
	if ((typeof str1 === "string") && (typeof str2 === "string")) {
		if (str1.length === str2.length) {
			if (str1 === str2) {
				return "Both text are anagram";
			} else if (true) {
				let first = [];
				let second = [];

				for (let i = 0; i < str1.length; i++) {
					(`${str1[i]}`.toLowerCase().trim().length === 0) ? null : first.push(`${str1[i]}`.trim());
					(`${str2[i]}`.toLowerCase().trim().length === 0) ? null : second.push(`${str2[i]}`.trim());
				}

				const answerOne = find(first, str2.toLowerCase());
				const answerTwo = find(second, str1.toLowerCase());

				if (answerOne && answerTwo) {
					return "Both text are anagram ";
				} else {
					return "Both text aren't anagram";
				}

			}
		} else {
			return "Both text aren't anagram"
		}
	} else throw new Error(`Parameter should be a string`);
}


// Example if we use anagram function to those both text "hello" & "move" anagram are not it will be return "Both text aren't anagram"