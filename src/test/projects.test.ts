import { describe, expect, it } from "vitest";
import { filterProjects, type Project } from "@/lib/projects";

const list = [
  { slug: "a", category: "web" },
  { slug: "b", category: "mobile" },
  { slug: "c", category: "web" },
] as Project[];

describe("project filter", () => {
  it("All shows every project", () => {
    expect(filterProjects(list, "all").map((p) => p.slug)).toEqual(["a", "b", "c"]);
  });
  it("Web shows only web projects", () => {
    expect(filterProjects(list, "web").map((p) => p.slug)).toEqual(["a", "c"]);
  });
  it("Mobile shows only mobile projects", () => {
    expect(filterProjects(list, "mobile").map((p) => p.slug)).toEqual(["b"]);
  });
});
