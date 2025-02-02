import "../styles/global.css";

import { languages } from '../i18n/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"


// <!-- <ul>
//   {Object.entries(languages).map(([lang, label]) => (
//     <li>
//       <a href={`/${[lang, path].join('/')}`}>{label}</a>
//     </li>
//   ))}
// </ul> -->
export default function LanguagePicker({language, path}: {language: string, path: string}) {
return (
  <DropdownMenu>
    <DropdownMenuTrigger>{language}</DropdownMenuTrigger>
    <DropdownMenuContent>
      {Object.entries(languages).map(([lang, label]) => <DropdownMenuItem key={lang}><a href={`/${[lang, path].join('/')}`}>{label}</a></DropdownMenuItem>)}
    </DropdownMenuContent>
  </DropdownMenu>
)
}