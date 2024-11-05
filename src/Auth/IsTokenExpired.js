import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
const isTokenExpired =()=> {
	try {
		const decode = jwtDecode(Cookies.get("token"));
		return decode.exp * 1000 <= Date.now();
	} catch (error) {
		console.log(error);
		return true;
	}
}
export default isTokenExpired