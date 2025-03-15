import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { formatNumber } from "@/utils/formatNumber";

import RepositoryCard from "./RepositoryCard";

import { repositoriesMock } from "@/__test__/mockData";

describe("RepositoryCard", () => {
  it("should render repository name, description, and formatted stars", () => {
    render(<RepositoryCard repository={repositoriesMock[0]} />);

    expect(screen.getByText("ArrJanitor")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A python script designed to clean up Radarr/Sonarr downloads in Deluge.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(formatNumber(2000))).toBeInTheDocument();
  });
});
