/* Makes `import styles from "./*.module.scss"` typesafe */
declare module "*.module.scss" {
  const classes: { readonly [key: string]: string }
  export default classes
}
