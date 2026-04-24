import path from "path";
import { loadYaml } from "../../lib/loadYaml";
import ResourceClient from "./client";

type ResourceContent = {
    title?: string;
    description?: string;
    resources?: {
        title: string;
        description: string;
        imageSrc?: string;
        imageAlt?: string;
    }[];  
};

export default async function Resources() {
    const resourcePath = path.join(process.cwd(), "src/content/resources.yaml");
    const resourceContent = (await loadYaml(resourcePath) as ResourceContent)
    return (
        <ResourceClient resourceContent={resourceContent} />
    );
}
        