| 值 | 字符串 | 数字 | 布尔值 | 对象 |
| :---: | :---: | :---: | :---: | :---: |
| underfined | "underfined" | NaN | false | throws TypeError |
| null | "null" | 0 | false |  throws TypeError |
| true | "true" | 1 |  | new Boolean(true) |
| false | "false" | 0 |  | new Boolean(false) |
| ""(字符串) |  | 0 | false | new String("") |
| "1.2"(非空，数字) |  | 1.2 | true | new String("1.2") |
| "one"(非空，非数字) |  | NaN | true | new String("one") |
| 0 | "0" |  | false | new Number(0) |
| -0 | "0" |  | false | new Number(-0) |
| NaN | "NaN" | | false | new Number(NaN) |
| Infinity | "Inifity" | | true | new Number(Inifity) |
| -Infinity | "-Inifity" | | true | new Number(-Inifity) |
| 1 | "1" |  | true | new Number(1) |
| {} |  |  | true | |
| [] | "" | 0 | true | |
| [9] | "9" | 9 | true | |
| ['a'] |  | NaN | true | |
| function(){} |  | NaN | true | |