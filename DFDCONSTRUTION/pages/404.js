import Layout from "../components/Layout";
import Link from "next/link";
const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>Esta página no existe. Por favor retorna al <Link href="/">Inicio</Link>
            </p>
        </div>
    </Layout>
)

export default custom404;