import "@testing-library/jest-dom";

beforeEach(() => {
  // FIXME:
  //  temporarily suppress console.error and console.warn
  //  primereact components are throwing warnings and errors about stylesheets
  jest.spyOn(console, "error").mockImplementation(() => {
    return;
  });
  jest.spyOn(console, "warn").mockImplementation(() => {
    return;
  });
});
