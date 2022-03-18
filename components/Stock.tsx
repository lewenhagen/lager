import { Text, View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import config from "../config/config.json";

function StockList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${config.base_url}/products?api_key=${config.api_key}`)
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, []);

 const list = products.map((product, index) => <Text style={styles.list} key={index}>{ product.name.replaceAll('"', '') } ({ product.stock })</Text>);

  return (
    <View style={styles.list}>
      { list }
    </View>
  );
}

const styles = StyleSheet.create({
  stock: {
    fontSize: 30,
    color: "#084C61",
    textAlign: "center",
    borderBottomColor: "black",
    borderBottomWidth: 2,


  },
  list: {
    textAlign: "center",
    color: "#000",
    fontSize: 20,
  }
});

export default function Stock() {
    return (
        <View>
            <Text style={styles.stock}>Lagerstatus</Text>
            <StockList />
        </View>
    )
}
