export default {
  name: "skill",
  type: "document",
  title: "Skill",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "group",
      type: "string",
      title: "Group",
      initialValue: "us-south",
      options: {
        list: [
          { title: "US-North", value: "us-north" },
          { title: "US-South", value: "us-south" },
          { title: "US-East", value: "us-east" },
          { title: "US-West", value: "us-west" },
          { title: "UK", value: "uk" },
          { title: "Europe", value: "europe" },
        ], // <-- predefined values
        //layout: 'radio' // <-- defaults to 'dropdown'
      },
    },
  ],
};
