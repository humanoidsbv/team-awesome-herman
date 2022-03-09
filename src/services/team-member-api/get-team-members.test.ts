import { getTeamMembers } from "./get-team-members";

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

test("if getTeamMembers function is only called once", async () => {
  await getTeamMembers();
  expect(global.fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members/`);
});
