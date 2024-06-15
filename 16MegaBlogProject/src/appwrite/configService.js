import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from '../EnvConfig/conf'

// we are making a concept for upload post and perform different operations of it 

export class configService {

    client = new Client()
    databases;
    bucket; //storage

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // create document  **slug is the document id
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
        }
    }

    // upload file
    // we called it as bucket instead of storage
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,

            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
        }
    }

    async delteFile(FileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                FileId
            )
        } catch (error) {
            console.log("Appwrite serive :: delteFile :: error", error);
        }
    }

    getFilePreview(FileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                FileId,

            )
        } catch (error) {
            console.log("Appwrite serive :: filePreview :: error", error);
        }
    }
}


const configServiceOBJ = new configService()
export default configServiceOBJ