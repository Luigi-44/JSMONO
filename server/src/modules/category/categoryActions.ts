// Some data to make the trick
import type { Request, RequestHandler, Response } from "express";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

/* Here you code */
const browse: RequestHandler = (_req, res) => {
  res.json(categories);
};

const read: RequestHandler = async (req, res): Promise<void> => {
  const categoryId = Number.parseInt(req.params.id);
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    res.status(404).json({ message: "Catégorie non trouvée" });
    return;
  }

  res.json(category);
};

// Export them to import them somewhere else

export default { browse, read };
