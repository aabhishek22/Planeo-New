export default function extractCustomFields(yamlString) {
  const matches = [...yamlString.matchAll(/\{\{\s*\.Custom\.([\w]+)\s*\}\}/g)];
  const uniqueKeys = [...new Set(matches.map((match) => match[1]))];
  return uniqueKeys.map((key) => ({ key, value: "" }));
}

// Example usage:
// const yaml = `
//   replicaCount: {{.Custom.replicas}}

//   image:
//     repository: ""
//     pullPolicy: IfNotPresent
//     tag: latest

//   nameOverride: {{.Custom.name}}
//   fullnameOverride: {{.Custom.name}}

//   serviceAccount:
//     create: true
//     annotations: {}
//     name: ""

//   service:
//     type: ClusterIP
//     port: {{.Custom.port}}
//   `;

// const fields = extractCustomFields(yaml);
// console.log(fields);
