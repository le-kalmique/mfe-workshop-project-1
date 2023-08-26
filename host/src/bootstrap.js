import { mount as mountList } from "list/List";
import { mount as mountCalendar } from "calendar/Calendar";

mountList(document.querySelector("#my-list"));
mountCalendar(document.querySelector("#my-calendar"));
