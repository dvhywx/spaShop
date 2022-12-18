import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import List from "../../components/Product/List/List";
import Product from "../../components/Product/Product";
import Section from "../../components/Section/Section";

export default function Home() {
    return (
        <>
            <Banner />
            <Section />
            <About />
            <Product />
            <List />
        </>
    );
}
