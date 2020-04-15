# A simple React Toast

UseMemo, UseReducer, UseContext was used

### How to use

1.  Clone app

2.  Import toastProvider and wrap around app

    ### Example

    import withToastProvider from "./Toast/withToastProvider";

    let ToastProvider = withToastProvider(App);

    ReactDOM.render(
    <ToastProvider />,
    document.getElementById("root")
    );

3.  Import Toast using UseToast Hook

    ### Example

    import { useToast } from "./Toast";

    const toast = useToast();

    toast.success("I am awesome");

    ### You can pass a string array to the add method

    toast.error(["I am awesome", "That's true"]);

    ### Methods

    Available methods are

    info, success, warning, error

## Credit

    https://github.com/henev/react-custom-toast
