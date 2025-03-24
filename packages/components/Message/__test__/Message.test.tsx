import { describe, test, expect } from "vitest";
import { message, closeAll } from "../method";
import { rAF } from "@xida-ui/utils";

function getTopValue(element: Element) {
  const styles = window.getComputedStyle(element);
  const topValue = styles.getPropertyValue("top");
  return Number.parseFloat(topValue);
}

describe("Message", () => {
  test("message() function", async () => {
        const handler = message({ message: "hello msg", duration: 0 });
        await rAF();
       
        expect(document.querySelector(".xida-message")).toBeTruthy();
        handler.close();
        
        await rAF();
        setTimeout(() => {
            expect(document.querySelector(".xida-message")).toBeFalsy();
        }, 3000);

    });

  test("call message() function more than once", async () => {
    message({ message: "hello msg", duration: 0 });
    message({ message: "hello msg1", duration: 0 });
    await rAF();
    expect(document.querySelectorAll(".xida-message").length).toBe(2);
    closeAll();
    await rAF();
    expect(document.querySelector(".xida-message")).toBeFalsy();
  });

  test("message offset", async () => {
    message({ message: "hello msg", duration: 0, offset: 100 });
    message({ message: "hello msg", duration: 0, offset: 50 });

    await rAF();
    const elements = document.querySelectorAll(".xida-message");
    expect(elements.length).toBe(2);

    expect(getTopValue(elements[0])).toBe(100);
    expect(getTopValue(elements[1])).toBe(150);
  });
});
