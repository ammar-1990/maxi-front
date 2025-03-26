import Container from "@/app/_components/Container";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Container className="min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-4">About</h1>

      <p className="mb-4">
        Welcome! This blog is a curated space for curious thinkers, life
        optimizers, and anyone hungry for smarter living.
      </p>

      <p className="mb-4">
        Here, you’ll find insights across tech, health, productivity, and
        everything in between — always written with clarity, purpose, and a
        touch of curiosity.
      </p>

      <p className="mb-4">
        Whether you're here to learn something new, build better habits, or just
        enjoy thoughtful content — you’re in the right place.
      </p>

      <p className="mb-4">
        This site is independently built and written. No fluff, no distractions
        — just ideas worth your scroll.
      </p>

      <p className="text-sm text-muted-foreground">
        Thanks for reading — and welcome again.
      </p>
    </Container>
  );
};

export default page;
