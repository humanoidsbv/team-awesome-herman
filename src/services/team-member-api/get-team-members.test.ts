async function fetchTeamMembers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/team-members/`);
  const json = await res.json();

  return json;
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
  const json = await fetchTeamMembers();
  expect(Array.isArray(json)).toEqual(true);
  expect(json.length).toEqual(2);
});
