async function fetchTeamMembers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members/`);
  const mockedResponse = await res.json();

  return mockedResponse;
}

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(["Herman", "Fabiano"]),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test("if fetchTeamMembers works", async () => {
  const mockedResponse = await fetchTeamMembers();
  expect(Array.isArray(mockedResponse)).toEqual(true);
  expect(mockedResponse.length).toEqual(2);
});
