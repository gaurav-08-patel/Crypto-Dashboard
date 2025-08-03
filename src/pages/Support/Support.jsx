import Layout from "@/components/Layout";
import { Mail , MessageCircle  } from "lucide-react";
import Form from "./components/Form";

const Support = () => {
    return (
        <Layout title="Support">
            <div className="mt-4  flex gap-2 max-lg:flex-col max-lg:gap-3">
                <section className="flex-1/2  flex flex-col gap-3 max-xsm:gap-1  ">
                    <Mail className=" text-[#5F00D9] " />
                    <h1 className="font-medium text-2xl max-xsm:text-xl">Contact US</h1>
                    <p className="text-sm text-gray-500 max-w-[390px] max-xsm:text-xs">
                        Have a question or just want to know more? Feel free to
                        reach out to us.
                    </p>
                </section>
                <section className="flex-1/2 p-6 bg-white rounded-2xl  max-xsm:p-4">
                    <Form />
                </section>
            </div>

            <div className="mt-8 mb-5 flex gap-3 max-lg:flex-col max-lg:gap-6">
                <article className="flex-1/2  flex flex-col gap-3">
                    <MessageCircle  className=" text-[#5F00D9]" />
                    <h1 className="font-medium text-2xl max-xsm:text-xl">Live Chat</h1>
                    <p className="text-sm text-gray-500 max-w-[390px] max-xsm:text-xs">
                       Don’t have time to wait for the answer? Chat with us now.
                    </p>
                </article>
                <article
                    className="bg-[#5F00D9] rounded-2xl p-4 flex-1/2
          bg-[url(/Visual%202.png)]"
                >
                    <span className="p-1.5 text-sm bg-[white] text-[#5F00D9] rounded-2xl">
                        Chatbot
                    </span>
                    <p className="mt-2 font-medium max-sm:text-sm text-white">
                        Chat with us now.
                    </p>
                </article>
            </div>
        </Layout>
    );
};

export default Support;
