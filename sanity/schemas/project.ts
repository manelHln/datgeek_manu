export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "type",
      type: "text",
      title: "Type",
    },
    {
      name: "techStack",
      type: "array",
      of: [{ type: "string" }],
      title: "Technologies",
    },
  ],
};
