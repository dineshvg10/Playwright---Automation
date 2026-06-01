import {test,expect} from "@playwright/test"

test("test1 @smoke",()=>{
    console.log("test 1 executed");
})
test("test2 @smoke",()=>{
    console.log("test 2 executed");
})
test("test3 @smoke",()=>{
    console.log("test 3 executed");
})
test("test4 @reg",()=>{
    console.log("test 4 executed");
})
test("test5 @smoke @reg",()=>{
    console.log("test 5 executed");
})