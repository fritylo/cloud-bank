Object.isValid = function(obj, format) {
	for (let prop in format) {
		let type = format[prop];
		if (type.constructor === Object) {
			if (!Object.isValid(obj[prop], type))
				return false;
		}
		else if (!(prop in obj) || (obj[prop].constructor !== type))
			return false;
	}
	return true;
};