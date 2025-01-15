import React from "react";
import { use } from "react";
import { useState, useEffect } from "react";
import { TextInput, View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

function Searchbar({ onSelectLocation}){
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const API_KEY = "AIzaSyD7-8-1-0-0";

    const fetchSuggestions = async () => {
        if (query) {
            setSuggestions([])
            return
        }

        setIsLoading(true)
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${query}&types=establishment&language=en&rankby=distance`
            )
            const data = await response.json()
            setSuggestions(data.predictions)
        } catch (error) {
            console.error("Error fecthing suggestions:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchSuggestions(query)
    }, [query])

    const handleSelectLocation = (place) => {
        onSelectLocation(place)
        setQuery(place.description)
        setSuggestions([])
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} value={query} onChangeText={setQuery} placeholder="">

            </TextInput>
        </View>
    )
}