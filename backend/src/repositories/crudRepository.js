export default function crudRepository(model) {
  return {
    create: async (data) => {
      const newDoc = await model.create(data);
      return newDoc;
    },
    getAll: async () => {
      const allDocs = await model.find();
      return allDocs;
    },
    findById: async (id) => {
      const doc = await model.findById(id);
      return doc;
    },
    delete: async (id) => {
      const doc = await model.findByIdAndDelete(id);
      return doc;
    },
    update: async (id, data) => {
      const updatedDoc = await model.findByIdAndUpdate(id, data, {
        new: true
      });
      return updatedDoc;
    },
    //modelIds is an array of ids
    deleteMany: async (modelIds) => {
      const response = await model.deleteMany({
        _id: {
          $in: modelIds
        }
      });
      return response;
    }
  };
}
