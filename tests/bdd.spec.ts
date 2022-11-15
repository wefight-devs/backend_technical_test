import { stop, BDD, insertTodo } from "../src";

describe("BDD", () => {
  afterAll(()=> stop())
  it('should insert a todo in BDD', () => {
    insertTodo({id: "12345", value: "Eat more chocolate"});
    expect(BDD.todos).toHaveLength(1);
    expect(BDD.todos[0].id).toEqual("12345");
    expect(BDD.todos[0].value).toEqual("Eat more chocolate");
  });
});
