import { prettyPrint } from "./helper.js";
import { Tree } from "./Tree/Tree.js";

const array = Array.from({length: 20}, () => Math.floor(Math.random()*100))
const tree = new Tree(array)


console.log('This is levelOrder')
tree.levelOrderForEach((value) => console.log(value))
console.log('This is preOrder')
tree.preOrderForEach((value) => console.log(value))
console.log('This is inOrder')
tree.inOrderForEach((value) => console.log(value))
console.log('This is postOrder')
tree.postOrderForEach((value) => console.log(value))

console.log('before insertion')
console.log(prettyPrint(tree.root))
console.log(tree.isBalanced())
tree.insert(101)
tree.insert(102)
tree.insert(103)

console.log('after insertion')
console.log(prettyPrint(tree.root))
console.log(tree.isBalanced())

tree.rebalance()

console.log('after rebalance')
console.log(prettyPrint(tree.root))
console.log(tree.isBalanced())

console.log('This is levelOrder')
tree.levelOrderForEach((value) => console.log(value))
console.log('This is preOrder')
tree.preOrderForEach((value) => console.log(value))
console.log('This is inOrder')
tree.inOrderForEach((value) => console.log(value))
console.log('This is postOrder')
tree.postOrderForEach((value) => console.log(value))