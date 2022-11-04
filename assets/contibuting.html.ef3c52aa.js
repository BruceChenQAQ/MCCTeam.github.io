import{_ as l,r as a,o as s,c as r,a as e,b as o,d as n,e as i}from"./app.050b4a79.js";const c={},d=e("h1",{id:"contributing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#"),o(" Contributing")],-1),h=e("p",null,"At this moment this page needs to be created.",-1),u={href:"https://github.com/MCCTeam/Minecraft-Console-Client/wiki/Update-console-client-to-new-version",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/ReinforceZwei",target:"_blank",rel:"noopener noreferrer"},g=i('<h2 id="translations" tabindex="-1"><a class="header-anchor" href="#translations" aria-hidden="true">#</a> Translations</h2><p>Пројекат је тренутно предевен на следће језике (сортирано по Енглеском алфабету):</p><ul><li><code>de.ini</code> : Deutsch - German</li><li><strong><code>en.ini</code> : English - English</strong></li><li><code>fr.ini</code> : Français (France) - French</li><li><code>ru.ini</code> : Русский (Russkiy) - Russian</li><li><code>vi.ini</code> : Tiếng Việt (Việt Nam) - Vietnamese</li><li><code>zh-Hans.ini</code> : 简体中文 - Chinese Simplified</li><li><code>zh-Hant.ini</code> : 繁體中文 - Chinese Traditional</li></ul><h3 id="add-new-translation" tabindex="-1"><a class="header-anchor" href="#add-new-translation" aria-hidden="true">#</a> Add new translation</h3>',4),_=e("p",null,"First you need to get the name of the translated file.",-1),f={href:"https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c",target:"_blank",rel:"noopener noreferrer"},m=i("<li>Use the language code of the row in the table as the name of the translation file.</li><li>For example: <ul><li><code>English</code> -&gt; row <code>English 0x0009</code> -&gt; <code>en</code> -&gt; <code>en.ini</code></li><li><code>Chinese (Traditional)</code> -&gt; row <code>Chinese (Traditional) 0x7C04</code> -&gt; <code>zh-Hant</code> -&gt; <code>zh-Hant.ini</code></li></ul></li>",2),b=e("p",null,"Which system languages are recommended to use this translation?",-1),x={href:"https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-lcid/a9eac961-e77d-41a6-90a5-ce1a8b0cdb9c",target:"_blank",rel:"noopener noreferrer"},C=i("<li>You will need to indicate which language codes this translation applies to.</li><li>For example: <ul><li>Translation <code>de.ini</code> applies to <code>de</code>, <code>de-AT</code>, <code>de-BE</code>, <code>de-DE</code>, ...</li><li>Translation <code>zh-Hans.ini</code> applies to <code>zh-Hans</code>, <code>zh</code>, <code>zh-CN</code>, <code>zh-SG</code>.</li></ul></li>",2),w=e("p",null,"Which game languages are recommended to use this translation?",-1),k={href:"https://github.com/MCCTeam/Minecraft-Console-Client/discussions/2239",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"Locale Code",-1),T=i("<li>You will need to indicate which locale codes this translation applies to.</li><li>For example: <ul><li>Translation <code>fr.ini</code> applies to <code>fr_ca</code>, <code>fr_fr</code>.</li><li>Translation <code>zh-Hans.ini</code> applies to <code>zh_cn</code>.</li></ul></li>",2),M=i("<li><p>Add the new translation to the code. (Optional)</p><ul><li><strong>If you are not familiar with programming, you can skip this step and just write the above information in your PR or issue.</strong></li><li>Add the newly created translation file <code>xx.ini</code> to the project <code>/Resources/lang/xx.ini</code>.</li><li>Open <code>/DefaultConfigResource.resx</code>.</li><li>Click <code>Add Resources</code>.</li><li>Choose <code>/Resources/lang/xx.ini</code>.</li><li>Rename the added resource file in <code>/DefaultConfigResource.resx</code> to <code>Translation_xx</code>.</li><li>Open <code>/Translations.cs</code>.</li><li>Find <code>public static Tuple&lt;string, string[]&gt; GetTranslationPriority();</code></li><li>Update the mapping of system language codes to translation files.</li><li>Find <code>public static string[] GetTranslationPriority(string gameLanguage);</code></li><li>Update the mapping of game locale code to translation files.</li></ul></li><li><p>Follow the section &quot;Update existing translation&quot;.</p></li>",2),y=e("h3",{id:"update-existing-translation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#update-existing-translation","aria-hidden":"true"},"#"),o(" Update existing translation")],-1),R={href:"https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/Resources/lang",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"en.ini",-1),z=e("code",null,"xx.ini",-1),D=e("li",null,[e("p",null,[o("Compare "),e("code",null,"en.ini"),o(" and "),e("code",null,"xx.ini"),o(" and update outdated or non-existent entries in "),e("code",null,"xx.ini"),o(".")])],-1),F={href:"https://github.com/MCCTeam/Minecraft-Console-Client/issues",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"translate-readme-md",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#translate-readme-md","aria-hidden":"true"},"#"),o(" Translate README.md")],-1),V={href:"https://raw.githubusercontent.com/MCCTeam/Minecraft-Console-Client/master/README.md",target:"_blank",rel:"noopener noreferrer"},G=i("<li><p>See <code>Add new translation -&gt; 1.</code> for the target language code. Assume it is <code>xx</code>.</p></li><li><p>Complete the translation according to the English README.md and name the translated version as <code>README-xx.md</code>.</p></li><li><p>In the English README, above the &quot;About&quot; section, add the name of the language and a hyperlink to <code>README-xx.md</code>.</p></li>",3),H=e("h2",{id:"contributors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#"),o(" Contributors")],-1),N={href:"https://github.com/MCCTeam/Minecraft-Console-Client/graphs/contributors",target:"_blank",rel:"noopener noreferrer"};function U(q,I){const t=a("ExternalLinkIcon");return s(),r("div",null,[d,h,e("p",null,[o("For now you can use our article from the "),e("a",u,[o("Git Hub repository Wiki"),n(t)]),o(" written by "),e("a",p,[o("ReinforceZwei"),n(t)]),o(".")]),g,e("ol",null,[e("li",null,[_,e("ul",null,[e("li",null,[o("Visit "),e("a",f,[o("this link"),n(t)]),o(" and find the first occurrence of the language you need to translate in the table below.")]),m])]),e("li",null,[b,e("ul",null,[e("li",null,[o("Still check the table in "),e("a",x,[o("this link"),n(t)]),o(", one language may have multiple rows.")]),C])]),e("li",null,[w,e("ul",null,[e("li",null,[o("Check out the table in "),e("a",k,[o("this link"),n(t)]),o(", where the "),E,o(" column indicates the language code in minecraft.")]),T])]),M]),y,e("ol",null,[e("li",null,[e("p",null,[o("Visit "),e("a",R,[o("the lang folder"),n(t)]),o(", download "),A,o(" and the language you want to translate("),z,o(").")])]),D,e("li",null,[e("p",null,[o("Once you finished the translation work, submit a pull request or send us the file through an "),e("a",F,[o("Issue"),n(t)]),o(" in case you are not familiar with Git.")])])]),v,e("ol",null,[e("li",null,[e("p",null,[o("Get the English version of the README.md from "),e("a",V,[o("here"),n(t)]),o(".")])]),G]),H,e("p",null,[e("a",N,[o("Check out our contributors on Github"),n(t)]),o(".")])])}const B=l(c,[["render",U],["__file","contibuting.html.vue"]]);export{B as default};
