import { getTeamMembers } from "./get-team-members";
import { NotFoundError } from "../../errors/not-found-error";

const unmockedFetch = global.fetch;
const item = [{ test: "test" }];

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(item),
    }),
  ) as jest.Mock;
});

afterEach(() => {
  global.fetch = unmockedFetch;
});

test("if getTeamMembers function returns the response", async () => {
  const response = await getTeamMembers();
  expect(response).toEqual(item);
});

test("if getTeamMembers function is only called once", async () => {
  expect(global.fetch).toHaveBeenCalledTimes(0);
  await getTeamMembers();
  expect(global.fetch).toHaveBeenCalledTimes(1);
});

test("if getTeamMembers function gets called using environment variable", async () => {
  await getTeamMembers();
  expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members/`);
});

test("if a notFoundError instance is returned after getting a 404", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: 404,
    }),
  ) as jest.Mock;
  const response = await getTeamMembers();
  expect(response).toBeInstanceOf(NotFoundError);
});
