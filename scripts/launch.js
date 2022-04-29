import {GameManager} from "https://github.com/jpez-development/CSY1018_assignment_2/blob/classes/classes/GameManager.js"
/*Add events to webpage*/
const manager = GameManager();

document.addEventListener("DOMContentLoaded", manager.load);
