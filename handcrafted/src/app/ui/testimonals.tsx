import React, { FC } from 'react';
import Image from 'next/image';
import axios from 'axios';
import styles from "@/app/ui/testimonials.module.css";

interface UsersInfo {
    id: string;
    name: string;
    image: string;
    story: string;
    email: string;
}

interface UserProps {
    props: UsersInfo[];
}

const UserInfo: FC<UserProps> = ({ props }) => {
    return (
        <div className={styles.tBorder}>
            {props.map(({ id, name, image, story, email }) => (
                <div key={id}>
                    <div className={styles.tcard}>
                        <Image
                            src={image}
                            alt={`${name} user avatar`}
                            width={100}
                            height={100}
                            className={styles.tImage}
                        />
                        <p className={styles.tIntro}>Company or Individual:</p>
                        <p>{name}</p>
                        <p className={styles.tIntro}>Their Story:</p>
                        <p>{story}</p>
                        <p className={styles.tIntro}>Contact: </p>
                        <p>{email}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Testimonials = () => {
    const [users, setUsers] = React.useState<UsersInfo[]>([]);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/users");
                const data = response.data.filter((user: UsersInfo) => user.story);

                if (data) {
                    setUsers(data);
                } else {
                    throw new Error("Failed to fetch users info");
                }
            } catch (error) {
                console.error(error);
                setError('Failed to fetch products');
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section>
            <UserInfo props={users} />
        </section>
    );
};

export default Testimonials;
