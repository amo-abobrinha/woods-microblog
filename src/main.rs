#![feature(plugin, custom_derive)]
#![plugin(rocket_codegen)]

extern crate rocket;

use std::io;
use std::path::{Path, PathBuf};

use rocket::response::NamedFile;
use rocket::request::Form;

#[derive(FromForm)]
struct Whisper<'r> {
    content: &'r str
}

/**************************************/
/** Routes                           **/
/**************************************/

#[get("/print_hello")]
fn hello() -> &'static str {
    "Hello, world!"
}

#[get("/")]
fn index() -> io::Result<NamedFile> {
    NamedFile::open("frontend/index.html")
}

#[get("/files/<file..>")]
fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("target/frontend/").join(file)).ok()
}

#[post("/whisper", data="<uform>")]
fn whisper<'a>(uform: Form<'a, Whisper<'a>>) -> String {
    let form = uform.get();
    format!("Hello, {}!", form.content)
}

/**************************************/
/** Main                             **/
/**************************************/

fn main() {
    rocket().launch();
}

fn rocket() -> rocket::Rocket {
    rocket::ignite().mount(
        "/",
        routes![
            index,
            files,
            hello,
            whisper
        ]
    )
}
