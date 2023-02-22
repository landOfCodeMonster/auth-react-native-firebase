import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React from "react";

const SigninScreen = () => {
    const [value, setValue] = React.useState({
        email: '',
        password: '',
        error: ''
    })

    const auth = getAuth();

    async function signUp() {
        if(value.email == '' || value.password === '') {
            setValue({
                ...value,
                error: 'Email and password are mandatory.'
            })
            return
        }

        try {
            await signInWithEmailAndPassword(auth, value.email, value.password)
        } catch (error) {
            setValue({
                ...value,
                error: 'erreur de login'
              })
        }

    }


    return (
        <View style={styles.container}>
            <Text>SignUp</Text>

            { !!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

            <View style={styles.controls}>

                <Input placeholder="Email" 
                    containerStyle={styles.control} 
                    value={value.email}
                    onChangeText={(text)=> setValue({...value, email: text})}
                    />

                <Input placeholder='Password'
                    containerStyle={styles.control}
                    value={value.password}
                    onChangeText={(text) => setValue({ ...value, password: text })}
                    secureTextEntry={true}
                    
                />

                <Button title="Sign In" buttonStyle={styles.control} onPress={signUp} />

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    controls: {
        flex: 1
    },
    control: {
        marginTop: 10,
        width: 200
    },
    error: {
        marginTop: 10,
        padding: 10,
        color: '#fff',
        backgroundColor: '#D54826FF',
    }
})

export default SigninScreen;