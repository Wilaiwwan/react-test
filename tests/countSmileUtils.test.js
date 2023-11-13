import { CountSmileys } from "../src/utils/countSmile"

test('Count the smiley faces!', () => {
    const arr1 = CountSmileys([';]', ':[', ';*', ':$']) 
    const arr2 = CountSmileys([';D', ':-(', ':-)', ';~)']) 

    console.log(arr1); // 0
    console.log(arr2); // 3
})