## Create a virtual environment

> #### Unix
> ```sh
> python3 -m venv .venv
> ```

> #### Windows
> ```sh
> py -m venv .venv
> ```

## Activate the virtual environment

> #### Unix
> ```sh
> source .venv/bin/activate
> ```

> #### Windows
> ```sh
> .venv\Scripts\activate
> ```

## Install dependencies

> #### Unix
> ```sh
> python3 -m pip install -r requirements.txt
> ```

> #### Windows
> ```sh
> py -m pip install -r requirements.txt
> ```

## Start the development server
```sh
uvicorn src.main:app --reload
```

## Start the server
```sh
uvicorn src.main:app
```
