import { Button, Col, Input, Row } from "antd";
import { useRef } from "react";
import  styles  from "./Singin.module.css";

export default function Singin() {
const emailRef = useRef<Input>(null);
const passwordRef = useRef<Input>(null);

    return(
    <Row align="middle" className={styles.signin_row}>
        <Col span = {24} >
            <Row className={styles.signin_contents}>
                <Col span={12}></Col>
                <Col span={12}>
                    <div className={styles.signin_title}>TOPICS</div>
                    <div className={styles.signin_subtitle}>Please Note Your Option</div>
                    <div className={styles.signin_underline} />
                    <div >
                        Eamil
                        <span>*</span>
                    </div>
                    <div >
                        <Input 
                            type="email" 
                            autoComplete="email"
                            placeholder="Email" 
                            name="email" 
                            className={styles.input}
                            ref={emailRef}
                            />
                    </div>
                    <div>
                        Password
                        <span>*</span>
                    </div>
                    <div>
                        <Input 
                            type="password" 
                            autoComplete="current-password" 
                            name="password"
                            ref={passwordRef} />
                    </div>
                    <div>
                        <Button size="large">
                            Sing in
                        </Button>
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
    );
}