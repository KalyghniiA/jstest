import {User} from "./user.js";
import {Task} from "./task.js";

const user = new User(new Task("mess"));
user.do();