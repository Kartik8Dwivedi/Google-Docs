import Document from "../schema/schema.js";

export const getDocument = async (id) => {
    if(!id) return;

    id = JSON.stringify(id);
    let doc;
    try {
            doc = await Document.findById(id);
    } catch (error) {
        console.log("Error is here")
    }


    if(doc) return doc;
    return await Document.create({ _id: id, data: "" });
}

export const updateDocument = async (id, data) => {
    id = JSON.stringify(id);
    return await Document.findByIdAndUpdate(id, { data });
}