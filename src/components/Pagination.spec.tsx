import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";

// Test values
const pageTotal = 10;
const setCurrentPage = jest.fn();
const testCurrentPage = 2;
const firstPage = 1;

describe("Pagination", () => {
  describe("When the first button is clicked", () => {
    describe("Then the currentPage", () => {
      it("Should be set to 1", async () => {
        render(
          <Pagination
            pageTotal={pageTotal}
            currentPage={testCurrentPage}
            setCurrentPage={setCurrentPage}
          />
        );

        fireEvent.click(screen.getByTestId("first-btn"));

        expect(setCurrentPage).toHaveBeenCalledWith(1);
        expect(setCurrentPage).toHaveBeenCalledTimes(1);
      });
      it("Should be set to 1 and the function should not have been called", async () => {
        render(
          <Pagination
            pageTotal={pageTotal}
            currentPage={firstPage}
            setCurrentPage={setCurrentPage}
          />
        );
        fireEvent.click(screen.getByTestId("first-btn"));

        expect(setCurrentPage).toHaveBeenCalledTimes(0);
      });
    });
  });
  describe("When the previous button is clicked", () => {
    describe("Then the currentPage", () => {
      it("Should be one less than before", async () => {
        render(
          <Pagination
            pageTotal={pageTotal}
            currentPage={testCurrentPage}
            setCurrentPage={setCurrentPage}
          />
        );
        fireEvent.click(screen.getByTestId("prev-btn"));

        expect(setCurrentPage).toHaveBeenCalledTimes(1);
        expect(setCurrentPage).toHaveBeenCalledWith(1);
      });
      it("should be 1 and the function has not been called", async () => {
        render(
          <Pagination
            pageTotal={pageTotal}
            currentPage={firstPage}
            setCurrentPage={setCurrentPage}
          />
        );
        fireEvent.click(screen.getByTestId("prev-btn"));
        expect(setCurrentPage).toHaveBeenCalledTimes(0);
      });
    });
  });
  describe("When the next button is clicked", () => {
    describe("Then the currentPage", () => {
      it("Should be one more than it was before", async () => {
        render(
          <Pagination
            pageTotal={pageTotal}
            currentPage={testCurrentPage}
            setCurrentPage={setCurrentPage}
          />
        );
        fireEvent.click(screen.getByTestId("next-btn"));

        expect(setCurrentPage).toHaveBeenCalledTimes(1);
        expect(setCurrentPage).toHaveBeenCalledWith(3);
      });
      it("Should be the last page and function should not have been called", async () => {
        render(
          <Pagination
            pageTotal={pageTotal}
            currentPage={pageTotal}
            setCurrentPage={setCurrentPage}
          />
        );
        fireEvent.click(screen.getByTestId("next-btn"));

        expect(setCurrentPage).toHaveBeenCalledTimes(0);
      });
    });
  });
  describe("When the last button is clicked", () => {
    describe("Then the currentPage", () => {
      it("Should be equal to the last page", () => {
        render(
          <Pagination
            pageTotal={pageTotal}
            currentPage={testCurrentPage}
            setCurrentPage={setCurrentPage}
          />
        );
        fireEvent.click(screen.getByTestId("last-btn"));

        expect(setCurrentPage).toHaveBeenCalledTimes(1);
        expect(setCurrentPage).toHaveBeenCalledWith(10);
      });
      it("Should be the last page and function should not have been called", async () => {
        render(
          <Pagination
            pageTotal={pageTotal}
            currentPage={pageTotal}
            setCurrentPage={setCurrentPage}
          />
        );
        fireEvent.click(screen.getByTestId("last-btn"));

        expect(setCurrentPage).toHaveBeenCalledTimes(0);
      });
    });
  });
});
